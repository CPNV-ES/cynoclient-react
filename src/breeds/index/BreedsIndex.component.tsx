import {useBreeds} from "../../common/hook/Breeds.hook";
import React, {useMemo, useState} from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Theme,
    Typography,
    useTheme
} from "@material-ui/core";
import {Breed} from "../../common/resource/Breed.resource";
import {makeStyles} from "@material-ui/core/styles";
import {Map} from "immutable";

export function BreedsIndexComponent() {
    const theme = useTheme();
    const styles = useStyles();
    const {data: breeds} = useBreeds();
    const [filteredCategory, setFilteredCategory] = useState<number>(-1);

    const categories: Map<number, string> = useMemo(() => {
        let result = Map<number, string>();

        if (breeds) {
            breeds.forEach((breed) => {
                if(breed.category)
                    result = result.set(breed.category.id, breed.category.noun)
            })
        }

        return result.sort();
    }, [breeds]);

    const renderItem = (breed: Breed) => (
        <Grid key={breed.id} item xs={12} sm={6} md={3}>
            <Card className={styles.cardWrapper}>
                <CardActionArea>
                    {
                        breed.picture ? (
                            <CardMedia
                                className={styles.cardMedia}
                                image={breed.picture}
                            />
                        ) : (
                            <div className={styles.cardMedia} style={{backgroundColor: theme.palette.grey["100"]}}>
                            </div>
                        )
                    }

                    <CardContent>
                        <Typography gutterBottom variant="h6">
                            {breed.noun}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )

    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography gutterBottom variant="h3">
                        Races
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormControl fullWidth={true}>
                        <InputLabel id={"categoryFilterLabel"}>Categories</InputLabel>

                        <Select
                            labelId={"categoryFilterLabel"}
                            value={filteredCategory}
                            onChange={e => setFilteredCategory(e.target.value as number)}
                        >
                            <MenuItem value={-1}>Aucun</MenuItem>
                            {
                                categories.map((value, key) => <MenuItem key={key} value={key}>{value}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                {breeds?.filter((breed: Breed) => {
                    if (filteredCategory === -1) {
                        return true
                    }

                    if (!breed.category) {
                        return false
                    }

                    return filteredCategory === breed.category.id
                }).map(renderItem)}
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => {
    return {
        cardWrapper: {
            margin: theme.spacing(2),
        },
        cardMedia: {
            height: 200,
        },
    }
});

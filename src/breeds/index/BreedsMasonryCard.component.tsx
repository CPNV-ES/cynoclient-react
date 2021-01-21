import {Card, CardActionArea, CardContent, CardMedia, Theme, Typography, useTheme} from "@material-ui/core";
import React from "react";
import {Breed} from "../../common/resource/Breed.resource";
import {makeStyles} from "@material-ui/core/styles";

export function BreedsMasonryCard({breed}: { breed: Breed }) {
    const theme = useTheme();
    const styles = useStyles();

    return (
        <Card className={styles.cardWrapper} key={breed.id}>
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

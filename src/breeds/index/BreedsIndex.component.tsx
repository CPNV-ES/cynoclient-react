import {useBreeds} from "../../common/hook/Breeds.hook";
import React, {useMemo, useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {Breed} from "../../common/resource/Breed.resource";
import {List, Map} from "immutable";
import {BreedsMasonry} from "./BreedsMasonry.component";

export function BreedsIndexComponent() {
    const {data: breeds} = useBreeds();
    const [filteredCategory, setFilteredCategory] = useState<number>(-1);

    const categories: Map<number, string> = useMemo(() => {
        let result = Map<number, string>();

        if (breeds) {
            breeds.forEach((breed) => {
                if (breed.category)
                    result = result.set(breed.category.id, breed.category.noun)
            })
        }

        return result.sort();
    }, [breeds]);

    const filteredBreeds: List<Breed> = useMemo(() => {
        if (!breeds) {
            return List();
        }

        return breeds.filter((breed: Breed) => {
            if (filteredCategory === -1) {
                return true
            }

            if (!breed.category) {
                return false
            }

            return filteredCategory === breed.category.id
        })
    }, [breeds, filteredCategory])

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
                <BreedsMasonry breeds={filteredBreeds}/>
            </Grid>
        </div>
    )
}


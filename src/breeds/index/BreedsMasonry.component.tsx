import {Breed} from "../../common/resource/Breed.resource";
import {List} from "immutable";
import React, {useEffect, useState} from "react";
import {MasonryScroller, RenderComponentProps, useContainerPosition, usePositioner} from 'masonic'
import {BreedsMasonryCard} from "./BreedsMasonryCard.component";
import {useWindowSize} from '@react-hook/window-size'
import {useDrawerTransitionChangeValue} from "../../common/hook/Navigation.hook";
import {useHistory} from "react-router-dom";

export function BreedsMasonry({breeds}: { breeds: List<Breed> }) {
    const history = useHistory();
    const [drawerTransitionValue] = useDrawerTransitionChangeValue();
    const containerRef = React.useRef(null)

    const [internalBreedsList, setInternalBreedsList] = useState<Breed[]>([])

    //for some reason not using directly the breeds from the props in the Masonery
    //fix a bug that miss calculate the height of each element
    //this way we force a re-render on the component on first use.
    //tried to use different deps with containerPoistion and Positioner but it didn't fix the problem
    useEffect(() => {
        setInternalBreedsList(breeds.toArray())
    }, [breeds])

    const [windowWidth, windowHeight] = useWindowSize()

    const {offset, width} = useContainerPosition(containerRef, [
        windowWidth,
        windowHeight,
        drawerTransitionValue
    ])

    const positioner = usePositioner({width, columnWidth: 400}, [
        width,
        internalBreedsList
    ])

    const renderItem = (props: RenderComponentProps<Breed>) => {
        return (
            <div style={{width: props.width}} onClick={() => history.push(`/breeds/${props.data.id}`)}>
                <BreedsMasonryCard breed={props.data}/>
            </div>
        );
    }

    return (
        <MasonryScroller
            positioner={positioner}
            offset={offset}
            height={windowHeight}
            containerRef={containerRef}
            items={internalBreedsList}
            render={renderItem}
            scrollFps={60}
        />
    )
}

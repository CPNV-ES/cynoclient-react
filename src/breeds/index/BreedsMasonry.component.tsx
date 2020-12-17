import {Breed} from "../../common/resource/Breed.resource";
import {List} from "immutable";
import React from "react";
import {MasonryScroller, RenderComponentProps, useContainerPosition, usePositioner} from 'masonic'
import {BreedsMasonryCard} from "./BreedsMasonryCard.component";
import {useWindowSize} from '@react-hook/window-size'
import {useDrawerTransitionChangeValue} from "../../common/hook/Navigation.hook";

export function BreedsMasonry({breeds}: { breeds: List<Breed> }) {
    const [drawerTransitionValue] = useDrawerTransitionChangeValue();
    const containerRef = React.useRef(null)

    const [windowWidth, windowHeight] = useWindowSize()

    const {offset, width} = useContainerPosition(containerRef, [
        windowWidth,
        windowHeight,
        drawerTransitionValue
    ])

    const positioner = usePositioner({width, columnWidth: 400}, [
        width,
        breeds
    ])

    const renderItem = (props: RenderComponentProps<Breed>) => {
        return (
            <div style={{width: props.width}}>
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
            items={breeds.toArray()}
            render={renderItem}
            scrollFps={60}
        />
    )
}

import {atom, useRecoilState} from "recoil";

const drawerTransitionChangeValue = atom({
    key: "drawerTransitionChangeValue",
    default: false
})

// contain a value that change every time the drawer has finished openning or closing
export const useDrawerTransitionChangeValue = () => useRecoilState(drawerTransitionChangeValue)

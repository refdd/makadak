import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton";
import SliderBlock from "@/widgets/SliderBlock/SliderBlock";

const FilterBtns = ({ filterBtnsNames }) => {
    const dispatch = useDispatch();
    const { subcatId } = useSelector(state => state.category);
    const selectedSubcat = subcatId
    const renderBtns = filterBtnsNames.map(({ label, subcatId }) => {
        return <CustomButton
            sx={{
                borderRadius: 2, fontWeight: 700, marginRight: 3, marginBottom: 3,
                color: ((label === 'all' && subcatId === 999 && selectedSubcat === null) || (subcatId === selectedSubcat)) ? '#00F0A9' : 'white'
            }}
            key={subcatId}
            color={'secondary'}
            label={label}
            onClick={() => { dispatch(setSubcatId(subcatId)) }}
        />
    })
    const sliderProps = { spaceBetween: 0, slidesPerView: "auto", navigation: false }
    return (
        <div style={{ marginTop: 15, marginLeft: 15 }}>
            <SliderBlock {...sliderProps}>
                {renderBtns}
            </SliderBlock>
        </div>
    )
}


export default FilterBtns;

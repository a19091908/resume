import "../styles/Tools.css"

const rSunSrc = process.env.PUBLIC_URL + "/icons/sun-regular.svg";
const sSunSrc = process.env.PUBLIC_URL + "/icons/sun-solid.svg";
const rMoonSrc = process.env.PUBLIC_URL + "/icons/moon-regular.svg";
const sMoonSrc = process.env.PUBLIC_URL + "/icons/moon-solid.svg";

export const Tools = (props: any) => {
    const onChangeReadMode = props.onClickReadMode;
    const onHoverReadModeIcon = props.onHoverReadModeIcon;
    const isBlackMode: boolean = props.isBlackMode;
    const isModeHover: boolean = props.isModeHover;

    let modeIconSrc = "";
    if (isBlackMode) {
        modeIconSrc = (isModeHover) ? sMoonSrc : rMoonSrc;
    }else {
        modeIconSrc = (isModeHover) ? sSunSrc : rSunSrc;
    }

    return (
        <div className='tool_div'>
            <span onClick={onChangeReadMode} onMouseEnter={onHoverReadModeIcon} onMouseLeave={onHoverReadModeIcon}>
                <img src={modeIconSrc} alt="sun" style={{ width: 50}}/>
            </span>
        </div>
    )
}

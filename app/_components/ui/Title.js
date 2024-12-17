
function TitleSubtitleWidget({
    title,
    subtitle,
    titleClass = 'text-2xl',
    subtitleClass = 'text-lg',
    containerStyle = 'bg-transparent '
}) {
    return (
        <div className={` ${containerStyle}`}>
            <h2 className={`${titleClass}`}>{title}</h2>
            <p className={` mt-2 ${subtitleClass}`}>{subtitle}</p>
        </div>
    );
}

export default TitleSubtitleWidget;

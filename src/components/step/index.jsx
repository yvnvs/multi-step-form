import * as S from "./styled";

function Step({
    title,
    subtitle,
    hasBackButton,
    hasNexButton,
    children
}){
    return (
        <S.Step>
            <S.StepHeader>
                <S.Title> {title}</S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
            </S.StepHeader>
            <S.Body>{children}</S.Body>
            <S.StepFooter>
                {hasBackButton && <S.GoBackButton>Go Back</S.GoBackButton>}
                {hasNexButton && <S.GoNextButton>Next Step</S.GoNextButton>}
            </S.StepFooter>
        </S.Step>
    )
}

export default Step;
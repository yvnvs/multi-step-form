import * as S from "./styled";

function Step({
    handleBack,
    handleSubmit,
    title,
    subtitle,
    hasBackButton,
    hasNexButton,
    children
}){
    return (
        <S.Step onSubmit={handleSubmit}>
            <S.StepHeader>
                <S.Title> {title}</S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
            </S.StepHeader>
            <S.Body>{children}</S.Body>
            <S.StepFooter>
                {hasBackButton && <S.GoBackButton onClick={handleBack} >Go Back</S.GoBackButton>}
                {hasNexButton ? 
                    (<S.GoNextButton type="submit">Next Step</S.GoNextButton>)
                :   
                    (<S.GoNextButton type="submit">Confirm</S.GoNextButton>)
                }
            </S.StepFooter>
        </S.Step>
    )
}

export default Step;
import Header from './../components/Header';

const DefaultLayout = () => {

    return (
        <div>
            <Header 
                title='Пропс title переданный из default layout'
                subTitle='Пропс subTitle переданный из default layout'
                onCLick={() => console.log('Клик по кнопке')}
            />
        </div>
    )
}

export default DefaultLayout;
const useText = () => {

    const getSlicedText = (text, start, end) => {
        if (!text && text === null) return 'Нет описания к данному сериалу'
        if (text?.length > end) return `${text?.slice(start, end)}...`;
        else return text;
    }

    return {
        getSlicedText
    }
}

export default useText;
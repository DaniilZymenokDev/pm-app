import React from 'react';

type PropTypes={
    id: string,
}

const SvgSelector:React.FC<PropTypes> = ({id}) => {
    switch (id){
        case "MessageQuestion":
            return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 13.8223H9.75L6.41249 16.0423C5.91749 16.3723 5.25 16.0198 5.25 15.4198V13.8223C3 13.8223 1.5 12.3223 1.5 10.0723V5.57227C1.5 3.32227 3 1.82227 5.25 1.82227H12.75C15 1.82227 16.5 3.32227 16.5 5.57227V10.0723C16.5 12.3223 15 13.8223 12.75 13.8223Z" stroke="#767C87" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.99986 8.51953V8.36206C8.99986 7.85206 9.31488 7.58205 9.62988 7.36455C9.93738 7.15455 10.2448 6.88456 10.2448 6.38956C10.2448 5.69956 9.68986 5.14453 8.99986 5.14453C8.30986 5.14453 7.75488 5.69956 7.75488 6.38956" stroke="#767C87" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.99662 10.3125H9.00337" stroke="#767C87" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        case "Notification":
            return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.01494 2.18164C6.53244 2.18164 4.51494 4.19914 4.51494 6.68164V8.84914C4.51494 9.30664 4.31994 10.0041 4.08744 10.3941L3.22494 11.8266C2.69244 12.7116 3.05994 13.6941 4.03494 14.0241C7.26744 15.1041 10.7549 15.1041 13.9874 14.0241C14.8949 13.7241 15.2924 12.6516 14.7974 11.8266L13.9349 10.3941C13.7099 10.0041 13.5149 9.30664 13.5149 8.84914V6.68164C13.5149 4.20664 11.4899 2.18164 9.01494 2.18164Z" stroke="#767C87" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M10.4029 2.40008C10.1704 2.33258 9.93043 2.28008 9.68293 2.25008C8.96293 2.16008 8.27293 2.21258 7.62793 2.40008C7.84543 1.84508 8.38543 1.45508 9.01543 1.45508C9.64543 1.45508 10.1854 1.84508 10.4029 2.40008Z" stroke="#767C87" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.2646 14.2949C11.2646 15.5324 10.2521 16.5449 9.01465 16.5449C8.39965 16.5449 7.82965 16.2899 7.42465 15.8849C7.01965 15.4799 6.76465 14.9099 6.76465 14.2949" stroke="#767C87" strokeWidth="1.2" strokeMiterlimit="10"/>
            </svg>
        case "Search":
            return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.66634 14.0007C11.1641 14.0007 13.9997 11.1651 13.9997 7.66732C13.9997 4.16951 11.1641 1.33398 7.66634 1.33398C4.16854 1.33398 1.33301 4.16951 1.33301 7.66732C1.33301 11.1651 4.16854 14.0007 7.66634 14.0007Z" stroke="#4F535A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6663 14.6673L13.333 13.334" stroke="#4F535A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        case "Add":
            return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>


        default:
            return <svg></svg>
    }
};

export default SvgSelector;
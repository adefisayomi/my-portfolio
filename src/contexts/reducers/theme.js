export const themeObject = {
    isDark: true,
    dark: {
        body: 'rgb(9,12,16)',
        bgColor: 'rgb(17,17,17)',
        // color: 'rgb(201,209,204)',  //default
        color: 'rgb(6, 160, 6)',   //green color
        border: '0.5px solid rgb(54, 54, 54)',
        dark: true
    },
    light: {
        body: '#fafafa',
        bgColor: 'white',
        color: 'rgb(70, 69, 69)',
        dark: false,
        border: '0.5px solid rgb(221, 221, 221)'
    }
    
}

export function themeReducer (state, action) {

    if(action.type === 'TOGGLE_UI') {
        return { ...state, isDark: !state.isDark }
    }
    else {
        return state
    }
}
import * as actionTypes from './actions'

const initialState = {
    skills: [],
    loadedSkills: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_SKILL:
            const newSkill = {
                id: action.id,
                name: action.name,
                description: action.description
            }
            return {
                ...state,
                skills: state.skills.concat( newSkill ),
                loadedSkills: true
            }
    }
    return state
}

export default reducer;
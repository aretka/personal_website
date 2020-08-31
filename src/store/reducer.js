import * as actionTypes from './actions'

const initialState = {
    skills: [],
    loadedSkills: false,
    removingSkillID: null
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
        case actionTypes.ADD_REMOVING_SKILL_ID:
            return {
                ...state,
                removingSkillID: action.skillID
            }
        case actionTypes.REMOVE_SKILL:
            return {
                ...state,
                skills: state.skills.filter(skill => skill.id !== state.removingSkillID)
            }
    }
    return state
}

export default reducer;
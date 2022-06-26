export const getCurrenStep = (steps = [], index) => steps[index];

export const getCurrenStepId = (steps = [], index) =>
  getCurrenStep(steps, index)?.id;

export const getTotalSteps = (steps = []) => steps.length - 1;

export const isLastStep = (steps = [], index) => getTotalSteps(steps) === index;
export const isFirstStep = (index) => index === 0;

export const getShowButton = (steps = [], index) => {
    if(index === 0 || getTotalSteps(steps) === index) return false;
    return true;
}   

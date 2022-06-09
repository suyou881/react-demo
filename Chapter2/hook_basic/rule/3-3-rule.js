//각 훅이 사용된 위치 정보를 기반으로 훅 데이터를 관리한다.

let hooks=null;

export function useHook(){
    // ...
    hooks.push(hookData);
}

function process_a_component_rendering(component) {
    hooks=[];
    component();
    let hooksForThisComponent = hooks;
    hooks=null;
    // ... 
}
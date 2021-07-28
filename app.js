/**
 * 
 * Component는 상태(state)에 따라서 DOM을 재정의(render)하는데
 * 이 재정의를 setState라는 함수를 통해서 진행한다.
 * 
 */

 const $app = document.querySelector("#app");

 // 추가버튼이 클릭될 때만 추가됨
 let state = {
   items: ["item1", "item2", "item3", "item4"]
 };
 
 const render = () => {
   const { items } = state;
   // const items = state.items;
 
   $app.innerHTML = `
     <ul>
       ${items.map((item) => `<li>${item}</li>`).join("")}
     </ul>
     <button id="append">추가</button>
   `;
 
   document.querySelector("#append").addEventListener("click", () => {
     setState({ items: [...items, `item${items.length + 1}`] });
   });
 };
 
 /**
  * state 재정의 시 render() 실행
  * @param {Array} newState 추가된 요소가 있는 배열
  */
 const setState = (newState) => {
   state = { ...state, ...newState };
   render();
 };
 
 render();
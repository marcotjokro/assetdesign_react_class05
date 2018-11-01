const initialPage = {
	page: 1,
	dim: 100,
	settings: null
}

export function Page(state=initialPage, action){
	var obj = Object.assign({}, state);
	
	switch(action.type){
		case "CHANGE_PAGE":
			obj.page = action.page;
			return obj;
		
		case "CHANGE_DIM":
			obj.dim = action.dim;
			return obj;
			
		default:
			return state;
	}
}
//clase creada para los elementos del menu
export class MenuItems {
	constructor(
		//identificador del elemento
    	public id: number,
    	//es true si estamos en ese elemento del menu
    	public active: boolean,
    	//url que se puede usar para el routing
    	public url: string,
    	//nombre del item en el menu
    	public name: string,
    	//es true si queremos que el elemento aparezca en el listado
    	public visible: boolean) { }

}

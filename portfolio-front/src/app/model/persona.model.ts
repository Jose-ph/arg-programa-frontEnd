export class persona {
    id?: number; //? dato autogenerado
    nombre: String;
    apellido : String;
    imgPerfil: String;
    imgBanner: String;
    about: String;
    ocupacion: String;

    constructor(nombre: String, apellido: String, imgPerfil: String, imgBanner: String, about: String, ocupacion: String){

        this.nombre = nombre;
        this.apellido = apellido;
        this.imgPerfil = imgPerfil;
        this.imgBanner = imgBanner;
        this.about = about;
        this.ocupacion = ocupacion;
    }
}
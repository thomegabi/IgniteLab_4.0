import { Replace } from "src/helpers/Replace";
import { Content } from "./content";
import { randomUUID } from "node:crypto";

export interface NotificationProps { // Interface criada para evitar conflitos dentro da classe, e para facilitar a criação de setters e getters
    recipientID: string;
    content: Content;
    category: string;
    readAt?: Date | null; // Esse é identado ?: pois é um parametro opcional, basicamente esta dizendo para o codigo que ele é tipo
                          // "Date", "undifined" ou "Nulo", se não houvesse o | não consideraria nulo
    canceledAt?: Date | null;
    createdAt: Date;
}



export class Notification {
    private _id: string;
    private props:  NotificationProps;

    constructor(props: Replace<NotificationProps, {createdAt?: Date}>,
        id?: string, // Aqui isso é feito para dizer que caso ja exista um ID não é necessário criar um novo
    ){ // Após criar um helper com o Replace é assim que se utiliza ele para tornar uma variavel opcional
        this._id = id ?? randomUUID(); // Deve ser idenrtado dessa forma para comparar se existe ou não
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }; // E é assim que se declara dentro do construtor
    }
    
    public get id(){
        return this._id;
    }

    public set recipientID(recipientID: string){
        this.props.recipientID = recipientID // Nova após a criação da interface
    }

    public get recipientID(): string{
    return this.props.recipientID;
    }

    public set category(category: string){
        this.props.category = category 
    }

    public get category(): string{
    return this.props.category;
    }

    public set content(content: Content){
        // this.content = content // Antiga indentação
        this.props.content = content // Nova após a criação da interface
    }

    public get content(): Content{
    return this.props.content;
    }

    public read(){
        this.props.readAt = new Date();
    }

    public unread(){
        this.props.readAt = null;
    }

    public get readAt(): Date | null | undefined {
    return this.props.readAt;
    }

    public cancel(){
        this.props.canceledAt = new Date();
    }

    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
        }

    public get createdAt(): Date{
    return this.props.createdAt;
    }

}
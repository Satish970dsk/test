import { AbstractControl } from "@angular/forms";

// a class to read the value from input
export function checkalphabet(txtval:AbstractControl){

    var res:string = txtval.value
    return res.startsWith('A')?null:{msg:true}
}
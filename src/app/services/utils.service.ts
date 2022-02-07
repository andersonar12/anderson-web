import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  presentLoader() {
    Swal.fire({
      heightAuto: false,
      title: "Cargando",
      allowOutsideClick: false,
      allowEscapeKey: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    })
  }

  successAlert = (title: string, msg: string) => Swal.fire(title, msg, 'success')

  closeLoader = () => Swal.close()
}


//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
import { Point3D } from './Point3D.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

let cv: CvHLines;
let obj: Obj3D;
let ang: number=0;

function leerArchivo(e:any) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    obj = new Obj3D();
    if (obj.read(contenido)) {
      //sDir = sDir1;
      cv = new CvHLines(graphics, canvas);
      cv.setObj(obj);
      cv.paint();
    }
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido:any) {
  var elemento = document.getElementById('contenido-archivo');
  //
  //readObject(new Input(contenido));
  elemento.innerHTML = contenido;
}

function vp(dTheta:number, dPhi:number, fRho:number):void{  // Viewpoint
  if (obj != undefined) {
    let obj: Obj3D = cv.getObj();
    if (!obj.vp(cv, dTheta, dPhi, fRho))
      alert('datos no validos');
  }
  else
    alert('aun no has leido un archivo');
}

function eyeDownFunc() {
  vp(0, 0.1, 1);
}

function eyeUpFunc() {
  vp(0, -0.1, 1);
}

function eyeLeftFunc() {
  vp(-0.1, 0, 1);
}

function eyeRightFunc() {
  vp(0.1, 0, 1);
}

function incrDistFunc() {
  vp(0, 0, 2);
}

function decrDistFunc() {
  vp(0, 0, 0.5);
}
function ArmarArray() {
  let i, j, h;
  for ( i = 1, j = 33, h =65 ; i <= 8 && j<=40 && h<=72 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y-15;
    obj.w[j].y=obj.w[j].y-15;
    obj.w[h].y=obj.w[h].y-15;

    obj.w[i].z=obj.w[i].z-15;
    obj.w[j].z=obj.w[j].z-15;
    obj.w[h].z=obj.w[h].z-15;

    obj.w[i].x=obj.w[i].x-15;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x+15;
	}
  for ( i = 9, j = 41, h =73 ; i <= 16 && j<=48 && h<=80 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y+15;
    obj.w[j].y=obj.w[j].y+15;
    obj.w[h].y=obj.w[h].y+15;

    obj.w[i].z=obj.w[i].z-15;
    obj.w[j].z=obj.w[j].z-15;
    obj.w[h].z=obj.w[h].z-15;

    obj.w[i].x=obj.w[i].x-15;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x+15;
	}
  for ( i = 17, j = 49, h =81 ; i <= 24 && j<=56 && h<=88 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y-15;
    obj.w[j].y=obj.w[j].y-15;
    obj.w[h].y=obj.w[h].y-15;

    obj.w[i].z=obj.w[i].z+15;
    obj.w[j].z=obj.w[j].z+15;
    obj.w[h].z=obj.w[h].z+15;

    obj.w[i].x=obj.w[i].x-15;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x+15;
	}
  for ( i = 25, j = 57, h =89 ; i <= 32 && j<=64 && h<=96 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y+15;
    obj.w[j].y=obj.w[j].y+15;
    obj.w[h].y=obj.w[h].y+15;

    obj.w[i].z=obj.w[i].z+15;
    obj.w[j].z=obj.w[j].z+15;
    obj.w[h].z=obj.w[h].z+15;

    obj.w[i].x=obj.w[i].x-15;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x+15;
	}
  cv.setObj(obj);
  cv.paint();	
}

function RegresarArray() {
  let i, j, h;
  for ( i = 1, j = 33, h =65 ; i <= 8 && j<=40 && h<=72 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y+10;
    obj.w[j].y=obj.w[j].y+10;
    obj.w[h].y=obj.w[h].y+10;

    obj.w[i].z=obj.w[i].z+10;
    obj.w[j].z=obj.w[j].z+10;
    obj.w[h].z=obj.w[h].z+10;

    obj.w[i].x=obj.w[i].x+10;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x-10;
	}
  for ( i = 9, j = 41, h =73 ; i <= 16 && j<=48 && h<=80 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y-10;
    obj.w[j].y=obj.w[j].y-10;
    obj.w[h].y=obj.w[h].y-10;

    obj.w[i].z=obj.w[i].z+10;
    obj.w[j].z=obj.w[j].z+10;
    obj.w[h].z=obj.w[h].z+10;

    obj.w[i].x=obj.w[i].x+10;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x-10;
	}
  for ( i = 17, j = 49, h =81 ; i <= 24 && j<=56 && h<=88 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y+10;
    obj.w[j].y=obj.w[j].y+10;
    obj.w[h].y=obj.w[h].y+10;

    obj.w[i].z=obj.w[i].z-10;
    obj.w[j].z=obj.w[j].z-10;
    obj.w[h].z=obj.w[h].z-10;

    obj.w[i].x=obj.w[i].x+10;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x-10;
	}
  for ( i = 25, j = 57, h =89 ; i <= 32 && j<=64 && h<=96 ; i++,j++,h++){
    obj.w[i].y=obj.w[i].y-10;
    obj.w[j].y=obj.w[j].y-10;
    obj.w[h].y=obj.w[h].y-10;

    obj.w[i].z=obj.w[i].z-10;
    obj.w[j].z=obj.w[j].z-10;
    obj.w[h].z=obj.w[h].z-10;

    obj.w[i].x=obj.w[i].x+10;
    obj.w[j].x=obj.w[j].x;
    obj.w[h].x=obj.w[h].x-10;
	}
  cv.setObj(obj);
  cv.paint();	
  
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);


//movimiento de piezas
document.getElementById('pza1Der').addEventListener('click', ArmarArray, false);
document.getElementById('pza1Izq').addEventListener('click', RegresarArray, false);

let Pix: number, Piy: number;
let Pfx: number, Pfy: number;
let theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
let flag: boolean = false;

function handleMouse(evento: any) {
  Pix=evento.offsetX;
  Piy = evento.offsetY;
  flag = true;
}

function makeVizualization(evento: any) {
  if (flag) {
    Pfx = evento.offsetX;
    Pfy = evento.offsetY;
    //console.log(Pfx, Pfy)
    let difX = Pix - Pfx;
    let difY = Pfy - Piy;
    vp(0, 0.1 * difY / 50, 1);
    Piy = Pfy;
    vp(0.1 * difX, 0 / 50, 1);
    Pix = Pfx;
    /*if( Piy>Pfy+1 ){
      phi += SensibilidadY;
      vp(0, 0.1*, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }

    if(Pfy>Piy+1){
      phi -= SensibilidadY;
      vp(0,-0.1, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }*/

    /*if (Pix > Pfx + 1) {
      theta += SensibilidadX;
      vp(0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }
        
    if (Pfx > Pix + 1) {
      theta -= SensibilidadX;
      vp(-0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }*/
  }
}

function noDraw() {
  flag = false;
}

canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);
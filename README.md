# Descripcion Encriptador de Texto 

Este documento presenta un proyecto que consiste en una aplicacion web basica diseñada para cifrar y descifrar textos mediante un sistema de sustitucion de caracteres. la finalidad del proyecto es proporcionar una herramienta educativa para entender conceptos esenciales de JavasScript, HTML y CSS, asi como la manera en que estos lenguajes colaboran para desarrollar una interfaz de usuario adaptable.

## Funcionalidades

- **Encriptación:**
  - La letra "e" se convierte en "enter"
  - La letra "i" se convierte en "imes"
  - La letra "a" se convierte en "ai"
  - La letra "o" se convierte en "ober"
  - La letra "u" se convierte en "ufat"
  
- **Desencriptación:** Revierte el proceso de encriptación para recuperar el texto original.

- **Adaptabilidad:** La interfaz se ajusta a diferenetes tamaños de pantalla, tanto en computadoras de escritorio como en dispositivos móviles. En la vista móvil, la imagen del resultado se oculta y el texto se adapta para ser completamente visible.

- **Validaciones:** 
  - No se permite ingresar texto vacío.
  - Se restringe el uso de mayúsculas, caracteres acentuados y la letra "ñ".

## Tecnologías Empleadas

- **HTML:** Estructura fundamental del proyecto.
- **CSS:** Diseño y Estilización responsiva.
- **JavaScript:** Implementacion de la Lógica para cifrar, desccifrar y manejar la interfaz de usuario.


1. **Interacción:**

- Introduce un texto en el campo de entrada.
- Presiona "Encriptar" para mostrar el texto cifrado en el área de resultados.
- Presiona "Desencriptar" para revertir el cifrado.
- Utiliza el botón "Copiar" para trasladar el resultado al portapapeles.
- Al borrar el texto del campo de entrada, la imagen y el texto inicial se repondrán.

# jagedn.github.io CV


Clona este repositorio a tu espacio (por ejemplo pulsando en fork)

Desde el mismo Github, ya en tu proyecto, pulsa "." (el punto) para entrar en el editor de Github sin salir del navegador

Edita el fichero "cv.adoc" (si ves un cv.html no lo cambies, usa el .adoc)

cv.adoc es un fichero Asciidoctor, muy parecido a Markdown y es superfacil de editar

Cambia tu nombre en las dos primeras lineas

Linea 10 cambia tu email 
Linea 11 cambia tu blog si lo tienes, o si quieres borra la linea

Puedes añadir alguna linea más con tu teléfono por ejemplo

Cada linea que empieza con tres iguales ( "==== Knowledge" por ejemplo) es una seccion en la parte izquierda de tu CV

Puedes añadir, cambiar o elimnar secciones

Lo interesante empieza tras la linea:

    [.chronologie]

Una vez más cada "==== texto" marca una sección en tu CV


## Guardar y generar

Guarda y haz un commit a tu repo

Vuelve a tu repositorio Github, Settings y busca "GH Pages"

Configura GH Pages para que use un Github Action

En el menu principal busca Actions y selecciona "gh-pages" y ejecutala manualmente

Si todo va bien tendras un site con tu cv.pdf publicado

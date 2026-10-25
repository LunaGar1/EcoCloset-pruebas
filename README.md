# EcoCloset — Proyecto de Pruebas de Software

Proyecto académico de **aseguramiento de la calidad del software (QA)** realizado sobre EcoCloset, una aplicación web orientada a la moda sostenible.

El proyecto se enfocó en evaluar el comportamiento de la aplicación mediante pruebas de compatibilidad entre navegadores y pruebas de rendimiento, utilizando herramientas de automatización y análisis de carga.

## Objetivos

- Evaluar el comportamiento de la aplicación web durante las pruebas realizadas.
- Automatizar validaciones mediante Selenium WebDriver.
- Analizar los tiempos de respuesta y la estabilidad del sistema mediante k6.
- Evaluar el comportamiento de la aplicación ante diferentes escenarios de carga.
- Documentar los resultados obtenidos e identificar posibles aspectos de mejora.

## Tecnologías y herramientas

| Herramienta | Uso |
|---|---|
| JavaScript | Desarrollo de los scripts de prueba. |
| Node.js y npm | Entorno de ejecución y gestión de dependencias. |
| Selenium WebDriver | Automatización de pruebas en navegadores. |
| k6 | Pruebas de rendimiento y análisis de métricas. |
| Chrome, Firefox y Edge | Validación de compatibilidad entre navegadores. |
| Git y GitHub | Control de versiones y documentación del proyecto. |
| Render | Plataforma de despliegue de la aplicación evaluada. |

## Estructura del proyecto

```text
EcoCloset-pruebas/
├── tests/
│   ├── compatibility.js
│   ├── load-test.js
│   ├── soak-test.js
│   └── stress-test.js
├── package.json
├── package-lock.json
└── README.md
```

### Descripción de los scripts

- **`compatibility.js`:** script destinado a las validaciones de compatibilidad entre navegadores.
- **`load-test.js`:** escenario de prueba de carga para evaluar el comportamiento bajo una carga de trabajo determinada.
- **`soak-test.js`:** escenario de prueba de resistencia para observar el comportamiento durante un periodo prolongado.
- **`stress-test.js`:** escenario de prueba de estrés para evaluar la respuesta ante condiciones de mayor exigencia.

## Pruebas realizadas

### 1. Compatibilidad entre navegadores

Se realizaron validaciones en Google Chrome, Mozilla Firefox y Microsoft Edge.

Durante el proceso se identificaron inconvenientes relacionados con la compatibilidad entre las versiones de Chrome y ChromeDriver, lo que evidenció la importancia de mantener configurado correctamente el entorno de automatización.

### 2. Pruebas de rendimiento con k6

Se ejecutaron tres escenarios de rendimiento:

- **Load Test — Prueba de carga:** evaluación de los tiempos de respuesta y los errores bajo una carga determinada.
- **Soak Test — Prueba de resistencia:** evaluación del comportamiento durante una ejecución prolongada.
- **Stress Test — Prueba de estrés:** evaluación de la respuesta del sistema ante condiciones de mayor exigencia.

## Resultados de las pruebas de rendimiento

Los siguientes resultados fueron registrados durante la ejecución original de las pruebas.

| Métrica | Load Test | Soak Test | Stress Test |
|---|---:|---:|---:|
| Solicitudes totales | 1.074 | 5.797 | 5.127 |
| Tiempo promedio | 36,32 ms | 36,25 ms | 34,66 ms |
| Tiempo mínimo | 19,56 ms | 18,41 ms | 18,21 ms |
| Tiempo máximo | 626,63 ms | 1,09 s | 919,22 ms |
| P90 | 49,21 ms | 50,55 ms | 50,19 ms |
| P95 | 67,84 ms | 67,98 ms | 64,49 ms |
| Solicitudes fallidas | 0 % | 0 % | 0 % |

### Análisis de los resultados

**Prueba de carga (Load Test)**

Se registraron 1.074 solicitudes, con un tiempo promedio de respuesta de 36,32 ms y un 0 % de solicitudes fallidas. El percentil 95 fue de 67,84 ms.

**Prueba de resistencia (Soak Test)**

Se registraron 5.797 solicitudes, con un tiempo promedio de 36,25 ms y un 0 % de solicitudes fallidas. El tiempo máximo observado fue de 1,09 segundos.

**Prueba de estrés (Stress Test)**

Se registraron 5.127 solicitudes, con un tiempo promedio de 34,66 ms y un 0 % de solicitudes fallidas. El percentil 95 fue de 64,49 ms y el tiempo máximo registrado fue de 919,22 ms.

### Conclusión de las pruebas de rendimiento

En los escenarios ejecutados, las métricas registradas mostraron tiempos promedio de respuesta inferiores a 40 ms y no se reportaron solicitudes fallidas.

Estos resultados describen el comportamiento observado durante las pruebas originales. No constituyen una garantía del rendimiento actual de la aplicación ni permiten determinar por sí solos su capacidad máxima, dado que el informe no especifica todos los parámetros de ejecución.

## Aprendizajes y competencias desarrolladas

- Automatización de pruebas web.
- Pruebas de compatibilidad entre navegadores.
- Diseño y ejecución de escenarios de carga, resistencia y estrés.
- Análisis de tiempos de respuesta, percentiles y solicitudes fallidas.
- Identificación de problemas de configuración en herramientas de automatización.
- Documentación de resultados y análisis del comportamiento de una aplicación web.

## Enlaces del proyecto

- **Repositorio de pruebas:** https://github.com/LunaGar1/EcoCloset-pruebas
- **Aplicación evaluada:** https://ecocloset-pi.onrender.com/

## Estado actual del proyecto

Las pruebas y los resultados documentados corresponden a una etapa anterior del proyecto. Actualmente, el despliegue de la aplicación puede presentar fallos y no se dispone de acceso al código fuente de la aplicación para verificar o corregir su estado.

Por tanto, los resultados presentados son históricos y no representan una evaluación actual del sitio web.

---
Luna Penagos Garcia

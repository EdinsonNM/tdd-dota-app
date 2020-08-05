## `/api`

El folder api contiene las llamadas a servicios. Acontinuación un ejemplo de la estructura de los archivos que se crean dentro de este folder:

```javascript
class DemoApi extends Api {
    static getAll(params) {
        return super.getJSON("url");
    }
    static get(id) {
        return super.getJSON(`url/${id}`);
    }
    static save(data) {
        return  super.post("url", {params: data, isPublicRequest: false});
    }
    static update(data) {
                        return super.put(`url/${id}`, {params: data, isPublicRequest: false});
    }
    static delete(id) {
        return super.delete(`url/${id}`{isPublicRequest: false});
    }
    static customGetWithOtherServer() {
        const url = super.getJSON("url", {host:"http://other-server"});
    }

    static customHeader(params) {
        return super.getJSON('url', {customHeader: {}});
    }
}
```

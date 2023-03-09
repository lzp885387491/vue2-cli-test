export default class Constructor {
    constructor(data) {
        this.$data = data;
        console.log(this.$data);
        this.setDom()
    }
    setDom() {
        if (this.$data.type == '1') {
            let dom = document.getElementById(this.$data.id);
            dom.className = 'fs-lsv-box';
            let fsLsvBox = document.createElement('dv-border-box-1');
            dom.appendChild(fsLsvBox);
            console.log(dom);
        }
    }
}
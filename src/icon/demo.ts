export class C {
    private x = 10
    getX = () => this.x;
    setX = (newVal: number) => {
        this.x = newVal;
    }
}

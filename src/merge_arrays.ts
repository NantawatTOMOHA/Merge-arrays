export function merge_arrays(
    c_1:number[],
    c_2:number[],
    c_3:number[]
): number[]{
    const a = c_1
    const b = c_2.slice().reverse();
    const c = c_3
    const result: number[]=[];
    let i=0,j=0,k=0

    while(i < a.length || j< b.length|| k<c.length){
        const a_min = i < a.length ? a[i] : Infinity;
        const b_min = j < b.length ? b[j] : Infinity;
        const c_min = k < c.length ? c[k] : Infinity;

        if (a_min <= b_min && a_min <= c_min) {
        result.push(a_min);
        i++;
        } else if (b_min <= a_min && b_min <= c_min) {
        result.push(b_min);
        j++;
        } else {
        result.push(c_min);
        k++;
        }
    }

    return result
}

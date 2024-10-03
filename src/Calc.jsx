import { add, myFun as fun } from './math';

function Calc({ a, b }) {
    return <div class="text-2xl font-semibold m-4">
        {add(a, b)}

        <h1>{fun()}</h1>
    </div>
}

export default Calc;
async function ret_10() {
    return 10
}

async function get_result() {
    integer = await ret_10();
    return (integer + 5) * 2

}


async function mein() {
    console.log(await get_result());


}


mein()
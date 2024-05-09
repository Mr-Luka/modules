

export async function handleButtonClick(e){
    const currenciesModule = await import("./curencies.js");
    console.log(currenciesModule);
}
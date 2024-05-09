

export async function handleButtonClick(e){
    const {localCurrency, default: currency} = await import("./curencies.js");
    console.log(localCurrency, currency);
}
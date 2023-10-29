export function TryFree() {
    return (
        <button aria-labelledby="tryFreeText" className="w-full bg-Blue my-6 px-12 py-4 rounded-xl shadow-card-shadow lg:py-5">
            <p className="text-white font-Poppins">
                <em id="tryFreeText" className="text-white font-Poppins font-semibold not-italic">Try it free 7 days </em> 
                then $20/mo. thereafter
            </p>
        </button>
    )
}

export function ClaimTrial() {
    return (
        <button aria-labelledby="claim" type="submit" className="w-full p-4 mt-4 bg-Green rounded-md shadow-claim-shadow hover:scale-y-110 hover:shadow-none transition">
            <p id="claim" className="font-Poppins font-semibold text-white uppercase">Claim your free trial</p>
        </button>
    )
}
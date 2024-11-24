'use client';

export default function Error({ error, reset }) {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">Bir Hata Oluştu</h1>
            <p>{error.message}</p>
            <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                Tekrar Dene
            </button>
        </div>
    );
}

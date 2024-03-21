function formatToUsd(val) {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
}

export default formatToUsd;
const SelectCategory = ({ value, onChange }) => {

    return (
        <select name={'select'} value={value} onChange={onChange}>
            <option value={'Alimentation'}>Alimentation</option>
            <option value={'Transport'}>Transport</option>
            <option value={'Divertissement'}>Divertissement</option>
            <option value={'Santé'}>Santé</option>
            <option value={'Éducation'}>Éducation</option>
            <option value={'Autres'}>Autres</option>
        </select>
    );
};

export default SelectCategory;


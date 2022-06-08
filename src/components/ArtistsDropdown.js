/*import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncSelect from 'react-select/async'
function ArtistDropdown(){

    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const handleInputChange = value => {
        setValue(value);
    };

    const handleChange = value => {
        setSelectedValue(value);
    }

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch("http://localhost:8080/songs/getall/Artists");
            const res = await result.json();
            console.log(res);
            setSelectedValue(await res);
        }
        fetchData();
    },[]);

  

    return(
        <div>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <AsyncSelect 
                    cacheOptions
                    defaultOptions
                    value={selectedValue}
                    getOptionLabel={e => e.name}
                    getOptionValue={e => e.id}
                    loadOptions={selectedValue}
                    onInputChange={handleInputChange}
                    onChange={handleChange} />
                </div>
                <div className="col-md-4"></div>
            </div>

        </div>
    );

}

export default ArtistDropdown */
 {/* const fetchData = async () => {
        const result = await ArtistList.get();
        const res = result.data.data;
        
        return res;
    }*/}
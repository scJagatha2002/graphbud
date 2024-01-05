
import Button from '@mui/material/Button';
import { api } from '../../apiConfig';


export default function Example() {


  const handleSubmit = async (event) => {
    
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    const UserData = {
      Id: data.get("company-id"),
      Name: data.get("company-name"),
      Location: data.get("company-location")
    }
    
    try {
      
      const response = await api.post('/api/company/',JSON.stringify(UserData));
      
      console.log(response);
      if(response){
        alert("Data Added Successfully");
      }
      
    } catch (error) {
      console.error("hgfd",error);
      alert("Error adding the data");
      
    }

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">


        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-extrabold leading-7 text-gray-900">Personal Details</h2>


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
            <div className="col-span-1 sm:col-span-3">
              <label htmlFor="company-id" className="block text-sm font-medium leading-6 text-gray-900">
                Company ID
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="company-id"
                  id="company-id"

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company-name"
                  id="company-name"

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <label htmlFor="company-location" className="block text-sm font-medium leading-6 text-gray-900">
                Company Location
              </label>
              <div className="mt-2">
                <input
                  id="company-location"
                  name="company-location"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3 flex justify-center">
              <Button variant="contained" type="submit">ADD</Button>

            </div>

          </div>
        </div>


      </div>


    </form>
  )
}

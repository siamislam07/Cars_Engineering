import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res=>{
            setBookings(res.data)
        })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])

    const handleDelete = id => {
        const proceed = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your Service has been deleted',
                    'success'
                )
                if (proceed) {
                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            const remaining = bookings.filter(booking=> booking._id != id)
                            setBookings(remaining)
                        })
                }
            }
        })

    }

    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount > 0) {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Service Added',

                })
                const remaining = bookings.filter(booking=> booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status ='confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl">your bookings:{bookings.length}</h2>
            <div className="overflow-x-auto mt-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox"  value='del'/>
                                </label> */}
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>)

                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;
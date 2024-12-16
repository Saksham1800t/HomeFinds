import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import noImage from '../../Images/noImage.jpeg';
import user from '../../Images/user.jpg';
import recp_logo from '../../Images/rec_logo.png';
import axios from 'axios';

const ProductTable = () => {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.post('http://localhost:5724/request/maked_req', {}, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setRequests(response.data.madeRequests);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5724/request/delete_req/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setRequests(requests.filter(request => request._id !== id));
        } catch (error) {
            console.error('Error deleting request:', error);
        }
    };

    const handleDownloadPDF = (request) => {
        const receiptContent = `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; width: 60%; margin: 0 auto; background-color: #f9f9f9;">
                <img
                    src="${recp_logo}"
                    alt="Logo"
                    style="display: block; margin: 0 auto; width: 100px; height: 100px; object-fit: cover; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                />
                <h2 style="text-align: center; color: #333;">Purchase Receipt</h2>
                <hr style="border: 1px solid #ccc;" />
    
                <h3 style="color: #555; font-size: 18px;">Product Details:</h3>
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <img
                        src="${request.productId.imageUrl || noImage}"
                        alt="Product Image"
                        style="width: 100px; height: 100px; margin-right: 15px; object-fit: cover; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                    />
                    <div>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Name:</strong> ${request.productId.pName}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Description:</strong> ${request.productId.description}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Price:</strong> Rs. ${request.productId.price}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Category:</strong> ${request.productId.category}</p>
                    </div>
                </div>
    
                <hr style="border: 1px solid #eee;" />
    
                <h3 style="color: #555; font-size: 18px;">Seller Details:</h3>
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <img
                        src="${request.sellerId.userImageUrl || user}"
                        alt="Seller Image"
                        style="width: 100px; height: 100px; margin-right: 15px; object-fit: cover; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                    />
                    <div>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Name:</strong> ${request.sellerId.name}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Email:</strong> ${request.sellerId.email}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Address:</strong> ${request.sellerId.address}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Contact:</strong> ${request.sellerId.contact}</p>
                    </div>
                </div>
    
                <hr style="border: 1px solid #eee;" />
    
                <h3 style="color: #555; font-size: 18px;">Buyer Details:</h3>
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <img
                        src="${request.buyerId.userImageUrl || user}"
                        alt="Buyer Image"
                        style="width: 100px; height: 100px; margin-right: 15px; object-fit: cover; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                    />
                    <div>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Name:</strong> ${request.buyerId.name}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Email:</strong> ${request.buyerId.email}</p>
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Contact:</strong> ${request.buyerId.contact}</p>
                    </div>
                </div>
    
                <hr style="border: 1px solid #eee;" />
    
                <h3 style="color: #555; font-size: 18px;">Purchase Date:</h3>
                <p style="font-size: 16px; color: #444;">${new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        })}</p>
    
                <hr style="border: 1px solid #ccc;" />
    
                <p style="text-align: center; font-size: 16px; color: #555; font-style: italic;">Thank you for your purchase!</p>
    
                
            </div>
    
                <div style="text-align: center; margin-top: 20px;">
                    <button onclick="window.print();" style="padding: 10px 20px; font-size: 16px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Print Receipt
                    </button>
                </div>

            <script>
                function downloadPDF() {
                    const doc = new jsPDF();
                    doc.html(document.body, {
                        callback: function (doc) {
                            doc.save('receipt.pdf');
                        },
                        margin: [10, 10, 10, 10],
                    });
                }
            </script>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(receiptContent);
        printWindow.document.close();
    };

    const handleSingleUser = (id) => {
        navigate(`/singleuser/${id}`);
    }

    const handleSingleProduct = (id) => {
        navigate(`/singleproduct/${id}`);
    }

    return (
        <>
            {requests.length === 0 ? (
                <h2 className="text-center text-muted my-5">There is no Request made by you...</h2>
            ) : (
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>Sr.No.</th>
                            <th className="text-left">Product Info</th>
                            <th className="text-left">Price</th>
                            <th className="text-left">Seller</th>
                            <th className="text-left">For</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={request._id}>
                                <td>{index + 1}</td>
                                <td className="text-left" onClick={() => handleSingleProduct(request.productId._id)} style={{ cursor: 'pointer' }}>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={request.productId.imageUrl || noImage}
                                            className="rounded-circle"
                                            alt="product image"
                                            style={{ width: "45px", height: "45px" }}
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{request.productId.pName}</p>
                                            <p className="text-muted mb-0">{request.productId.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Rs. {request.productId.price}</td>
                                <td className="text-left" onClick={() => handleSingleUser(request.sellerId._id)} style={{ cursor: 'pointer' }}>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={request.sellerId.userImageUrl || user}
                                            className="rounded-circle"
                                            alt="seller image"
                                            style={{ width: "45px", height: "45px" }}
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{request.sellerId.name}</p>
                                            <p className="text-muted mb-0">{request.sellerId.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{request.productId.type}</td>
                                <td className="text-center">
                                    <span className={`badge rounded-pill d-inline ${getStatusClass(request.status)}`}>
                                        {request.status}
                                    </span>
                                </td>
                                <td className="text-center">
                                    {request.status === 'accepted' && (
                                        <button
                                            type="button"
                                            className="btn btn-rounded btn-sm fw-bold btn-outline-primary mx-2"
                                            onClick={() => handleDownloadPDF(request)}
                                        >
                                            Download Receipt
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        className="btn btn-rounded btn-sm fw-bold btn-outline-danger mx-2"
                                        onClick={() => handleDelete(request._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

const getStatusClass = (status) => {
    switch (status) {
        case 'accepted':
            return 'bg-success';
        case 'rejected':
            return 'bg-danger';
        default:
            return 'bg-warning';
    }
};

export default ProductTable;

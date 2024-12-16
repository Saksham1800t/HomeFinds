import React, { useEffect, useState, useRef } from 'react';
import user from '../../Images/user.jpg';
import noImage from '../../Images/noImage.jpeg';
import recp_logo from '../../Images/rec_logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductTableRec = () => {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.post('http://localhost:5724/request/received_req', {}, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                const filteredRequests = response.data.receivedRequests.filter(request => request.status !== 'rejected');
                setRequests(filteredRequests);
            } catch (error) {
                console.error('Error fetching received requests:', error);
            }
        };
        fetchRequests();
    }, []);

    const handleStatusChange = async (id, status) => {
        try {
            const response = await axios.put(
                `http://localhost:5724/request/update_req/${id}`,
                { status },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );

            if (status === 'rejected') {
                document.getElementById(`request-${id}`).classList.add('fade-out');
                setTimeout(() => {
                    setRequests(prevRequests =>
                        prevRequests.map(request => (request._id === id ? null : request)).filter(Boolean)
                    );
                }, 300);
            } else {
                setRequests(requests.map(request =>
                    request._id === id ? { ...request, status: response.data.updatedRequest?.status || status } : request
                ));
            }
        } catch (error) {
            console.error('Error updating request status:', error);
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
                <h2 style="text-align: center; color: #333;">...Receipt For Seller...</h2>
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
                        <p style="margin: 5px 0; font-size: 16px; color: #444;"><strong>Address:</strong> ${request.buyerId.address}</p>
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
    
                <p style="text-align: center; font-size: 16px; color: #555; font-style: italic;">Thank you for your business!</p>
            
                <div style="text-align: center; margin-top: 20px;">
                    <button onclick="window.print();" style="padding: 10px 20px; font-size: 16px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Print Receipt
                    </button>
                </div>
            </div>
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
                <h2 className="text-center text-muted my-5">There is no Request for your Products...</h2>
            ) : (
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>Sr.No.</th>
                            <th className="text-left">Product Info</th>
                            <th className="text-left">Price</th>
                            <th className="text-left">Buyer</th>
                            <th className="text-left">For</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests
                            .filter(request => request !== null)
                            .map((request, index) => (
                                <tr key={request._id} id={`request-${request._id}`}>
                                    <td>{index + 1}</td>
                                    <td className="text-center" onClick={() => handleSingleProduct(request.productId._id)} style={{ cursor: 'pointer' }}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={request.productId.imageUrl ? request.productId.imageUrl : noImage}
                                                className="rounded-circle"
                                                alt={request.productId.pName}
                                                style={{ width: '45px', height: '45px' }}
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">{request.productId.pName}</p>
                                                <p className="text-muted mb-0">{request.productId.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Rs. {request.productId.price}</td>
                                    <td className="text-center">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={request.buyerId.userImageUrl ? request.buyerId.userImageUrl : user}
                                                className="rounded-circle"
                                                alt={request.buyerId.name}
                                                style={{ width: '45px', height: '45px' }}
                                            />
                                            <div className="ms-3" onClick={() => handleSingleUser(request.buyerId._id)} style={{ cursor: 'pointer' }}>
                                                <p className="fw-bold mb-1">{request.buyerId.name}</p>
                                                <p className="text-muted mb-0">{request.buyerId.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{request.productId.type}</td>
                                    <td className="text-center">
                                        <span className={`badge bg-${request.status === 'pending' ? 'warning' : request.status === 'accepted' ? 'success' : 'danger'} rounded-pill d-inline`}>
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        {request.status === 'accepted' ? <>
                                            <button
                                                type="button"
                                                className="btn btn-rounded btn-sm fw-bold btn-outline-primary mx-2"
                                                onClick={() => handleDownloadPDF(request)}
                                            >
                                                Download Receipt
                                            </button>
                                        </> : <>
                                            <button
                                                type="button"
                                                className="btn btn-rounded btn-sm fw-bold btn-outline-success mx-2"
                                                onClick={() => handleStatusChange(request._id, 'accepted')}
                                                disabled={request.status !== 'pending'}
                                            >
                                                Accept
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-rounded btn-sm fw-bold btn-outline-danger mx-2"
                                                onClick={() => handleStatusChange(request._id, 'rejected')}
                                                disabled={request.status !== 'pending'}
                                            >
                                                Reject
                                            </button>
                                        </>}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
            <style>
                {`
                .fade-out {
                    animation: fadeOut 0.3s ease-out forwards;
                }
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                }
                `}
            </style>
        </>
    );
};

export default ProductTableRec;


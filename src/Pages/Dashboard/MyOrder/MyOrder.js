import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./MyOrder.css";

const MyOrder = () => {
  const user = useSelector((state) => state.user.userAuth);
  const [myOrder, setMyOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nameless-atoll-45965.herokuapp.com/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        setLoading(false);
      });
  }, [isDelete, user.email]);

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(
        `https://nameless-atoll-45965.herokuapp.com/myOrder/deleteOrder/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setIsDelete(!isDelete);
            alert("Good job!", "deleted successfull", "success");
          } else {
            setIsDelete(false);
          }
        });
    }
  };
  return (
    <div responsive="sm md">
      <h1 className="text-center py-5">Your Order: {myOrder.length}</h1>
      <Container>
        <div className="row">
          <div className="col-md-12 table-responsive" id="no-more-table">
            <Table striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>User Name</th>
                  <th>Product Title</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              {!Loading ? (
                myOrder?.map((items) => (
                  <tbody className="table-title" key={items?._id}>
                    <tr>
                      <td data-title="User Name">{items?.displayName}</td>
                      <td data-title="Product Title">{items?.product}</td>
                      <td data-title="Address">{items?.address}</td>
                      <td data-title="Email">{items?.email}</td>
                      <td data-title="Phone">{items?.phone}</td>
                      <td data-title="Cancel">
                        <button
                          onClick={() => handleDelete(items?._id)}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                      {/* <td data-title="Status">
                        <button className="update-btn">{items.status}</button>
                      </td> */}
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="spiner mx-auto pt-5">
                  <Spinner className="text-center" animation="border" />
                </div>
              )}
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyOrder;

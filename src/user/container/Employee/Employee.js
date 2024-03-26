import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { object, string, number } from 'yup';
import { useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, Edit } from '@mui/icons-material';

function Employee(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [edit, setEdit] = React.useState(null);

    const getData = () => {
        const storedData = JSON.parse(localStorage.getItem('employee'));

        if (storedData) {
            setData(storedData);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setEdit(null);
    };

    const employeeSchema = object({
        name: string().required('Name required'),
        date: string().required('date required'),
        salary: number().required('Salary required').positive('Salary must be positive'),
    });

    const handleAdd = (values) => {
        const localData = JSON.parse(localStorage.getItem('employee')) || [];
        const Rid = Math.floor(Math.random() * 1000) + 1;

        localData.push({ ...values, id: Rid });
        localStorage.setItem('employee', JSON.stringify(localData));
        getData();
    }

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        localStorage.setItem('employee', JSON.stringify(updatedData));
        setData(updatedData);
    }

    const handleEdit = (rowData) => {
        formik.setValues(rowData);
        setOpen(true);
        setEdit(rowData.id);
    }

    const handleUpdate = (values) => {
        const updatedData = data.map(item => (item.id === values.id ? values : item));
        localStorage.setItem('employee', JSON.stringify(updatedData));
        getData();
        handleClose();
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
            salary: '',
        },
        validationSchema: employeeSchema,
        onSubmit: (values) => {
            if (edit) {
                handleUpdate(values);
            } else {
                handleAdd(values);
                handleClose();
            }
        },
    });

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'date', width: 130 },
        { field: 'salary', headerName: 'Salary', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <>
                    <Button onClick={() => handleEdit(params.row)} startIcon={<Edit />} />
                    <Button onClick={() => handleDelete(params.row.id)} startIcon={<DeleteOutline />} />
                </>
            ),
        },
    ];

    const { handleSubmit, handleChange, handleBlur, errors, values, touched } = formik;

    return (
        <>
            <div className='m-4 mx-5 d-flex justify-content-end'>
                <Button variant="outlined" color='primary' onClick={handleClickOpen}>
                    Add to details
                </Button>
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='text-center'>Add Employee</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent style={{ width: 500 }}>
                        <div>
                            <TextField
                                margin="dense"
                                name="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                error={errors.name && touched.name}
                                helperText={errors.name && touched.name ? errors.name : ''}
                            />
                        </div>
                        <div>
                            <TextField
                                margin="dense"
                                name="date"
                                type="date"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date}
                                error={errors.date && touched.date}
                                helperText={errors.date && touched.date ? errors.date : ''}
                            />
                        </div>
                        <div>
                            <TextField
                                margin="dense"
                                name="salary"
                                label="Salary"
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.salary}
                                error={errors.salary && touched.salary}
                                helperText={errors.salary && touched.salary ? errors.salary : ''}
                            />
                        </div>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">{edit ? 'Edit' : 'Add'}</Button>
                        </DialogActions>
                    </DialogContent>
                </form>
            </Dialog>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Employee;

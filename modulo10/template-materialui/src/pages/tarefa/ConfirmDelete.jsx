import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const ConfirmDelete = ({ openDelete, setOpenDelete, handleDeletar, idDeleteSelected }) => {
    const handleDeleteAndClose = () => {
        handleDeletar(idDeleteSelected);
        setOpenDelete(false);
    };
    return (
        <Dialog
            open={openDelete}
            onClose={() => setOpenDelete(false)}
        >
            <DialogTitle>Tem certeza que deseja deletar a tarefa?</DialogTitle>

            <DialogContent>Essa tarefa será deletada permanentemente.</DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={() => setOpenDelete(false)}>Cancelar</Button>
                <Button variant="contained" color="error" onClick={() => handleDeleteAndClose()}>Deletar</Button>
            </DialogActions>
        </Dialog>
            );
  };

            export default ConfirmDelete;
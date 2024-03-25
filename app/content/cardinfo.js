
 {/* <Dialog open={isDialogOpen} onClose={handleDialogClose} 
         aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description" >
          <Box  dividers sx={{ width: '530px' , height:'auto', backgroundColor:'#f2e9f5' }} >
            <DialogTitle id="scroll-dialog-title" className="program-title mt-3">Program Details</DialogTitle>
            <DialogContent dividers  >
               <DialogContentText id="scroll-dialog-description" tabIndex={-1} >
        
                {selectedProgram && (
                           <>
                          
                  <div >
                    <strong style={{color:'rgb(81, 16, 141)'}}>Reference Program:</strong> {selectedProgram.referenceProgram}
                  </div>
                  <div>
                    <strong style={{color:'rgb(81, 16, 141)'}}>Name Program:</strong> {selectedProgram.nameProgram}
                  </div> 
                  
                  {selectedProgram.items && (
                    <div>
                      <strong style={{color:'rgb(81, 16, 141)' }}>Items:</strong>
                      {selectedProgram.items.map((item) => (
                        <div key={item.idItem}>
                        <ul style={{marginTop:'10px'}}>
                          <li >
                            <p> <strong style={{ color:' rgb(118, 56, 176)'}}>*Name:</strong> {item.name} </p>
                            <p> <strong style={{ color:'rgb(118, 56, 176)'}}>Type:</strong> {item.type} </p>
                            <p> <strong style={{ color:' rgb(118, 56, 176)'}}>Destination:</strong> {item.destination} </p>
                            <p> <strong style={{ color:' rgb(118, 56, 176)'}}>Date Début:</strong> {dayjs.utc(item.dateDebut).format('DD-MM-YYYY')} </p>
                            <p> <strong style={{ color:' rgb(118, 56, 176)'}}>Date Fin:</strong> {dayjs.utc(item.dateFin).format('DD-MM-YYYY')}  </p>
                            <p> <strong style={{ color:'rgb(118, 56, 176)'}}>Price:</strong> {item.price} </p>
                            <p> <strong style={{ color:' rgb(118, 56, 176)'}}>Required:</strong>  {item.required ? 'Obligatoire' : 'Facultatif'}  </p>
                          </li>
                          
                        </ul>
                      </div>
                      ))}
                    </div>
                  )}
                 
                </>
              )}    
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <button className="button flex  justify-center px-5 py-1.5 text-m"  onClick={handleDialogClose}>Reserve</button>

          <button className="button flex  justify-center px-5 py-1.5 text-m"  onClick={handleDialogClose}>Close</button>
        </DialogActions>
        </Box>
      </Dialog> */}
import React,{ useRef, useEffect } from 'react';

interface I_Modal {
    open: boolean;
    onClose: () => void;
    Content?: React.FC;
}

const ModalWrapper = (props: I_Modal) => {
    return props.open ? <Modal {...props} /> : null
}

export function Modal({ open, onClose, Content }: I_Modal) {
    const modalRef = useRef<any>(null);

    useEffect(() => {
        function handler(event: any) {
            if (!modalRef.current?.contains(event.target) && open){
             onClose();
            }  
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto" >
                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">

                    <div ref={modalRef} className="relative dark:bg-background-900 bg-white dark:text-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                        {
                            Content ? <Content /> :
                            <div className="dark:bg-background-900 bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">Deactivate account</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 dark:text-gray-300">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        }
                        <div className="dark:bg-background-900 bg-white px-4 py-3 sm:px-6 sm:flex ">
                            <button onClick={onClose} type="button" className="button w-full">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ModalWrapper) ;
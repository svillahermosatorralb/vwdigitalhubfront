import React from "react";

interface IModalComunication {
  childrenComponent: any;
  removeLimitSize?: boolean;
  emitClose: (isClosed: boolean) => void;
}
export const Modal: React.FC<IModalComunication> = ({
  childrenComponent,
  removeLimitSize,
  emitClose,
}) => {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-gray-200 px-4 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                <button className="m-3" onClick={() => emitClose(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {removeLimitSize ? (
                  <div>{childrenComponent}</div>
                ) : (
                  <div className="sm:flex sm:items-start">
                    {childrenComponent}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

declare class Guided {
  /**
   * Sets a function to retrieve filtered tour results when the
   * getAllTours() method is called.
   * @param filter_func Filter function that takes a single tour object from the
   * tours[] array returned from getAllTours()
   * method.
   */
  applyListFilter(filter_func: any): any;
  /**
   * Stops a currently playing tour. This method silently exits if no tours are
   * playing.
   */
  endTour(): any;
  /**
   * Gets a list of tours on the current page from which this method is called. Because this
   * method is asynchronous, a callback function must be passed to determine operation success and
   * get a list of tours.
   * @param cb_function Callback function called by getAllTours() after attempt to
   * fetch all tours for the current page from which getAllTours()
   * method is called.
   */
  getAllTours(cb_function: any): any;
  /**
   * Loads the guided tours player on a page in which guided tours player is not present by
   * default.
   */
  loadPlayer(): any;
  /**
   * Starts a tour. Because this method is asynchronous, you must pass a callback function
   * to determine operation success.
   * @param tour_id Sys ID of the tour from the Guided Tours [sys_embedded_tour_guide]
   * table.
   * @param step_number Optional. Step at which to start the tour. If not provided (or step number is
   * 0), tour starts from the beginning.
   * @param cb_function Optional. Callback function called by startTour() method after
   * attempt to launch the tour.
   */
  startTour(tour_id: string, step_number?: number, cb_function?: any): any;
}
export { Guided };
